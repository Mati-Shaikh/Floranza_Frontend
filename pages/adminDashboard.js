import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from '../components/footer';

const AdminDashboard = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: null
  });
  const [dashboardStats, setDashboardStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    totalProducts: 0
  });

  // Fetch perfumes
  const fetchPerfumes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/perfumes');
      const data = await response.json();
      setPerfumes(data);
      updateDashboardStats(data, orders);
    } catch (error) {
      console.error('Error fetching perfumes:', error);
    }
  };

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders');
      const data = await response.json();
      setOrders(data);
      updateDashboardStats(perfumes, data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Update dashboard statistics
  const updateDashboardStats = (perfumeData, orderData) => {
    const totalRevenue = orderData.reduce((sum, order) => 
      sum + (order.perfumeId?.price || 0), 0);
    
    setDashboardStats({
      totalRevenue,
      totalOrders: orderData.length,
      averageOrderValue: orderData.length ? totalRevenue / orderData.length : 0,
      totalProducts: perfumeData.length
    });
  };

  const prepareRevenueData = () => {
    if (!Array.isArray(orders)) {
      console.error('Orders is not an array:', orders);
      return [];
    }
  
    // Step 1: Reduce orders into revenueByDate
    const preRevenue = orders.reduce((acc, order) => {
      const date = new Date(order.createdAt).toLocaleDateString();
      acc[date] = (acc[date] || 0) + (order.perfumeId?.price || 0);
      return acc;
    }, {});
  
    console.log('PreRevenue (Intermediate Revenue by Date):', preRevenue);
  
    // Step 2: Map revenueByDate into an array of objects
    return Object.entries(preRevenue).map(([date, revenue]) => ({
      date,
      revenue,
    }));
  };
  

  const prepareProductData = () => {
    return perfumes.map(perfume => ({
      name: perfume.name,
      stock: perfume.stock,
      price: perfume.price
    }));
  };

  useEffect(() => {
    fetchPerfumes();
    fetchOrders();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch('http://localhost:5000/api/perfumes', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        fetchPerfumes();
        setIsModalOpen(false);
        setFormData({ name: '', description: '', price: '', stock: '', image: null });
      }
    } catch (error) {
      console.error('Error creating perfume:', error);
    }
  };

  // Handle perfume deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this perfume?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/perfumes/${id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          fetchPerfumes();
        }
      } catch (error) {
        console.error('Error deleting perfume:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#BBA14F]">
      {/* Header */}
      <header className="bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Floranza Fragrances Analytics</h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="border-b border-gray-800">
          <nav className="-mb-px flex space-x-8">
            {['dashboard', 'perfumes', 'orders'].map((tab) => (
              <button
                key={tab}
                className={`${
                  activeTab === tab
                    ? 'border-[#BBA14F] text-[#BBA14F]'
                    : 'border-transparent text-gray-500'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <div className="mt-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Total Revenue', value: `$${dashboardStats.totalRevenue.toLocaleString()}` },
                { title: 'Total Orders', value: dashboardStats.totalOrders },
                { title: 'Average Order Value', value: `$${dashboardStats.averageOrderValue.toFixed(2)}` },
                { title: 'Total Products', value: dashboardStats.totalProducts }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Revenue Over Time</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={prepareRevenueData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="date" stroke="#BBA14F" />
                      <YAxis stroke="#BBA14F" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #BBA14F' }}
                        labelStyle={{ color: '#BBA14F' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#BBA14F" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Product Stock Chart */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Product Stock Levels</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={prepareProductData()}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="name" stroke="#BBA14F" />
                      <YAxis stroke="#BBA14F" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #BBA14F' }}
                        labelStyle={{ color: '#BBA14F' }}
                      />
                      <Legend />
                      <Bar dataKey="stock" fill="#BBA14F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Perfumes Table */}
        {activeTab === 'perfumes' && (
          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#BBA14F] text-black px-4 py-2 rounded-md hover:bg-[#ab914f] mb-6"
            >
              Add New Perfume
            </button>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-800">
                  <tr>
                    {['Image', 'Name', 'Description', 'Price', 'Stock', 'Actions'].map((header) => (
                      <th key={header} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {perfumes.map((perfume) => (
                    <tr key={perfume._id}>
                      <td className="px-6 py-4">{perfume.name}</td>
                      <td className="px-6 py-4">{perfume.description}</td>
                      <td className="px-6 py-4">${perfume.price}</td>
                      <td className="px-6 py-4">{perfume.stock}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(perfume._id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      {/* Orders Table */}
{activeTab === 'orders' && (
  <div className="mt-8">
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-800">
        <thead className="bg-gray-800">
          <tr>
            {['Customer Name', 'Email', 'Perfume', 'Payment Status', 'Order Date'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="px-6 py-4">{order.customerName}</td>
              <td className="px-6 py-4">{order.customerEmail}</td>
              <td className="px-6 py-4">
                {order.perfumeId?.name || 'N/A'}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.paymentStatus === 'Paid'
                      ? 'bg-green-900 text-green-200'
                      : 'bg-yellow-900 text-yellow-200'
                  }`}
                >
                  {order.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

   

        {/* Add Perfume Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Add New Perfume</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  {[
                    { label: 'Name', type: 'text', key: 'name' },
                    { label: 'Description', type: 'textarea', key: 'description' },
                    { label: 'Price', type: 'number', key: 'price' },
                    { label: 'Stock', type: 'number', key: 'stock' },
                    { label: 'Image', type: 'file', key: 'image' }
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-medium mb-1">
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm p-2 bg-gray-800"
                          value={formData[field.key]}
                          onChange={(e) =>
                            setFormData({ ...formData, [field.key]: e.target.value })
                          }
                          required
                        />
                      ) : (
                        <input
                          type={field.type}
                          className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm p-2 bg-gray-800"
                          value={field.type !== 'file' ? formData[field.key] : undefined}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.key]: field.type === 'file' ? e.target.files[0] : e.target.value
                            })
                          }
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#BBA14F] text-black px-4 py-2 rounded-md hover:bg-[#ab914f]"
                  >
                    Add Perfume
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default AdminDashboard;