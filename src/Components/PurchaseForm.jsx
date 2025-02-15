import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import purchaseSchema from '../Schemas/PurchaseFormSchema';


const PurchaseForm = ({ handlePlaceOrder, productId, product }) => {
  const formik = useFormik({
    initialValues: {
      mobile: '',
      alterNateMobileNumber: '',
      address: '',
      pincode: '',
      productId: productId, 
      quantity: 1,
    },
    validationSchema: purchaseSchema,
    onSubmit: (values) => {
      handlePlaceOrder(values); 
    },
  });

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Mobile Number Input */}
        <div className="mt-6">
          <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Enter your mobile number"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-2 rounded px-4 py-2 w-full mt-2 ${
              formik.errors.mobile && formik.touched.mobile ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.errors.mobile && formik.touched.mobile && (
            <div className="text-red-500 text-sm mt-2">{formik.errors.mobile}</div>
          )}
        </div>

        {/* Alternate Mobile Number Input */}
        <div className="mt-4">
          <label htmlFor="alterNateMobileNumber" className="block text-sm font-semibold text-gray-700">
            Alternate Mobile Number
          </label>
          <input
            type="text"
            name="alterNateMobileNumber"
            id="alterNateMobileNumber"
            value={formik.values.alterNateMobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter alternate mobile number"
            className={`border-2 rounded px-4 py-2 w-full mt-2 ${
              formik.errors.alterNateMobileNumber && formik.touched.alterNateMobileNumber ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.errors.alterNateMobileNumber && formik.touched.alterNateMobileNumber && (
            <div className="text-red-500 text-sm mt-2">{formik.errors.alterNateMobileNumber}</div>
          )}
        </div>

        {/* Address Input */}
        <div className="mt-4">
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your Address"
            className={`border-2 rounded px-4 py-2 w-full mt-2 ${
              formik.errors.address && formik.touched.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.errors.address && formik.touched.address && (
            <div className="text-red-500 text-sm mt-2">{formik.errors.address}</div>
          )}
        </div>

        {/* Pincode Input */}
        <div className="mt-4">
          <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            value={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your Pincode"
            className={`border-2 rounded px-4 py-2 w-full mt-2 ${
              formik.errors.pincode && formik.touched.pincode ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.errors.pincode && formik.touched.pincode && (
            <div className="text-red-500 text-sm mt-2">{formik.errors.pincode}</div>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-md hover:scale-105 transition-all"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;

