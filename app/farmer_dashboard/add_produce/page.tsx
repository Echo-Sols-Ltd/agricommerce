'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProduce() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    price: '',
    location: '',
    harvestDate: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Handle text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

    const data = new FormData();
    data.append('cropName', formData.cropName);
    data.append('quantity', formData.quantity);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('harvestDate', formData.harvestDate);
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      const res = await fetch(`${apiUrl}/produce`, {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Failed to add produce');

      alert('Produce added successfully!');
      router.push('/farmer_dashboard/products');
    } catch (error) {
      console.error(error);
      alert('Error adding produce');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Produce</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Crop Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Crop Name</label>
            <input
              type="text"
              name="cropName"
              value={formData.cropName}
              onChange={handleChange}
              placeholder="Enter crop name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 50 kg"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g. $3.00/kg"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Harvest Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Harvest Date</label>
            <input
              type="date"
              name="harvestDate"
              value={formData.harvestDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 w-full text-sm text-gray-600"
            />
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-3 w-full h-48 object-cover rounded-md border"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Save Produce
          </button>
        </form>
      </div>
    </div>
  );
}
