import React, { useEffect,useState } from 'react';

const Wishlist = () => {
    useEffect(() => {
      window.scrollTo(0,0);
    }, []);
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
      const response = await fetch('https://songdata.zeabur.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('許願成功！');
        setFormData({
          songTitle: '',
          authorName: '',
          songStyle: '',
          url: '',
          email: '',
        });
      } else {
        alert('許願失敗，請稍後再試。');
      }
    } catch (error) {
      console.error('發生錯誤:', error);
      alert('無法提交表單，請檢查伺服器狀態。');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">許願表單</h2>
      <p className='text-l text-center'>
      我們只會將您的個人資料用於回應「許願表單」。我們保證您的資料不會以任何形式被轉發以及出售。亦不會向您發送任何推廣、傳銷及請求任何費用。
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 mt-3">
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
