// import React, { useState } from 'react';

// const Wishlist = () => {
//   const [formData, setFormData] = useState({
//     songTitle: '',
//     authorName: '',
//     songStyle: '',
//     url: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted data:', formData);
//     alert('許願已提交！');
//     setFormData({ songTitle: '', authorName: '', songStyle: '', url: '', email: '' });
//   };

//   return (
//     <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow-lg ">
//       <h2 className="text-2xl font-bold mb-4">許願表單</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">歌曲名稱</label>
//           <input
//             type="text"
//             name="songTitle"
//             value={formData.songTitle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">作者名稱</label>
//           <input
//             type="text"
//             name="authorName"
//             value={formData.authorName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">歌曲類型</label>
//           <input
//             type="text"
//             name="songStyle"
//             value={formData.songStyle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">歌曲網址</label>
//           <input
//             type="url"
//             name="url"
//             value={formData.url}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         >
//           提交
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Wishlist;
import React, { useState } from 'react';

const Wishlist = () => {
  const [formData, setFormData] = useState({
    songTitle: '',
    authorName: '',
    songStyle: '',
    url: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('許願已提交並成功寄出郵件！');
        setFormData({
          songTitle: '',
          authorName: '',
          songStyle: '',
          url: '',
          email: '',
        });
      } else {
        alert('郵件發送失敗，請稍後再試。');
      }
    } catch (error) {
      console.error('發生錯誤:', error);
      alert('無法提交表單，請檢查伺服器狀態。');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">許願表單</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">歌曲名稱</label>
          <input
            type="text"
            name="songTitle"
            value={formData.songTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">作者名稱</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">歌曲類型</label>
          <input
            type="text"
            name="songStyle"
            value={formData.songStyle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">歌曲網址</label>
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          提交
        </button>
      </form>
    </div>
  );
};

export default Wishlist;
