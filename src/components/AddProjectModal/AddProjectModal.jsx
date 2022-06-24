import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {toast, ToastContainer} from "react-toastify";

const AddProjectModal = ({users, setUsers, setOpenModal}) => {
   const formik = useFormik({
      initialValues: {
         image: '',
         title: '',
         dateStart: '',
         dateEnd: '',
         manager: '',
         administrator: ''
      },
      validationSchema: Yup.object({
         image: Yup.string()
           .min(3, 'Must be 3 characters or more')
           .required('Please enter URL images'),
         title: Yup.string()
           .min(3, 'Must be 3 characters or more')
           .max(20, 'Must be 20 characters or less')
           .required('Please enter your project title'),
         dateStart: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Please enter date'),
         dateEnd: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Please enter date'),
         manager: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Please enter name manager'),
         administrator: Yup.string().required('Please enter name administrator'),
      }),
      onSubmit: async (values) => {
         const addProject = await axios.post('https://62ac88639fa81d00a7b4445d.mockapi.io/users', values)
         setUsers([...users, addProject.data])
         toast.success("Add new project")
         setOpenModal(false)
      },
   });
   return (
        <div className="fixed justify-center flex w-full min-h-screen bg-white p-6 top-0 right-0 left-0 bottom-0 m-0-auto overflow-x-scroll z-50">
              <form onSubmit={formik.handleSubmit} className="">
                 <div className='text-right' onClick={() => {
                    setOpenModal(false)
                 }}>
                    <FontAwesomeIcon icon={faXmark} className='text-2xl hover:cursor-pointer'/>
                 </div>
                 <div className="p-16 rounded-lg shadow-inner bg-slate-300">
                    <div className="mb-6">
                       <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Название Проекта</label>
                       <input type="text"
                              id="title"
                              name="title"
                              onChange={formik.handleChange}
                              value={formik.values.title}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Заполнить заголовок"/>
                       {formik.errors.title ? <div className="text-red-400 text-sm">{formik.errors.title}</div> : null}
                    </div>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                       <div>
                          <label htmlFor="manager"
                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Руководитель проекта</label>
                          <input type="text"
                                 id="manager"
                                 name="manager"
                                 onChange={formik.handleChange}
                                 value={formik.values.manager}
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="Руководитель"/>
                          {formik.errors.manager ? <div className="text-red-400 text-sm">{formik.errors.manager}</div> : null}
                       </div>
                       <div>
                          <label htmlFor="administrator" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Администратор проекта</label>
                          <input type="text"
                                 id="administrator"
                                 name="administrator"
                                 onChange={formik.handleChange}
                                 value={formik.values.administrator}
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="Администратор"/>
                          {formik.errors.administrator ? <div className="text-red-400 text-sm">{formik.errors.administrator}</div> : null}
                       </div>
                       <div>
                          <label htmlFor="dateStart"
                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Дата старта</label>
                          <input type="date"
                                 id="dateStart"
                                 name="dateStart"
                                 onChange={formik.handleChange}
                                 value={formik.values.dateStart}
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder=""/>
                          {formik.errors.dateStart ? <div className="text-red-400 text-sm">{formik.errors.dateStart}</div> : null}
                       </div>
                       <div>
                          <label htmlFor="date"
                                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Дата окончания</label>
                          <input type="date"
                                 id="dateEnd"
                                 name="dateEnd"
                                 onChange={formik.handleChange}
                                 value={formik.values.dateEnd}
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder=""/>
                          {formik.errors.dateEnd ? <div className="text-red-400 text-sm">{formik.errors.dateEnd}</div> : null}
                       </div>
                    </div>
                    <div className="mb-6">
                       <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">Ссылка на изображение</label>
                       <input type="text"
                              id="image"
                              name="image"
                              onChange={formik.handleChange}
                              value={formik.values.image}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="http://url/images"/>
                       {formik.errors.image ? <div className="text-red-400 text-sm">{formik.errors.image}</div> : null}
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >Добавить
                    </button>
                 </div>
              </form>
           <ToastContainer />
        </div>
   );
};

export default AddProjectModal;