import { Formik,Form,Field,ErrorMessage } from "formik"
import { useState } from "react"

const Forms = () => {
  const [FormType , setFormType] = useState('Signup');
  const [FormData , setFormData] = useState({
    name: "",
    email:"",
    password:"",
  });

  const validate = (values) => {
    const errors = {};
    if(!values.name)
    {
      errors.name = 'name is requaired';
    }
    if(!values.email)
    {
      errors.email ='email is requaires';
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  }


  const HandleFormType =()=>{
    setFormType(FormType => (FormType === 'Signup' ? 'Login' : 'Signup'));
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <button onClick={HandleFormType} className="mb-4 text-blue-500 hover:text-blue-700 focus:outline-none">
            {FormType === 'Signup' ? 'Switch to Login' : 'Switch to Signup'}
          </button>
          <Formik 
          initialValues={FormData}
          validate={validate}
          onSubmit={(values,{resetForm})=>{ //use reserForm
            console.log(values);
            setFormData(values);
            resetForm();
          }}
          >
            {({values ,handleChange,handleSubmit,errors}) => (
                <Form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                    <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value ={values.name}
                    onChange ={handleChange}
                    />
                    <ErrorMessage className="text-red-500 text-sm mt-1" name="name" component="div" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium" htmlFor="email">Email</label>
                    <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={values.email}
                    onChange={handleChange}
                    />
                    <ErrorMessage className="text-red-500 text-sm mt-1" name="email" component='div'  />
                  </div>
                  <div>
                    <label className="block text-sm font-medium" htmlFor="password">Password</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={values.password}
                      onChange={handleChange}
                    />
                    <ErrorMessage className="text-red-500 text-sm mt-1" name="password" component="div"  />
                  </div>  
                  <button  className="w-full mt-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Submit</button>
                </Form>
               )}
          </Formik>
        </div>
    </div>
  )
}

export default Forms