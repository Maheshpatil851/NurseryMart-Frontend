import * as yup from "yup" ;

const purchaseSchema = yup.object().shape({
    mobile: yup.string()
        .required("Mobile number is required")
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
      AlternateMobileNo: yup.string()
        .matches(/^[0-9]{10}$/, "Alternate mobile number must be 10 digits"),
      address: yup.string()
        .required("Address is required")
        .min(10, "Address should be at least 10 characters long"),
      pincode: yup.string()
        .required("Pincode is required")
        .min(6, "Pincode should be a 6-digit number")
        .max(6, "Pincode should be a 6-digit number"),
})

export default purchaseSchema;