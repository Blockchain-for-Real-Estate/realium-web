import React from 'react'
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { ApiPropertyService } from "../api/services/property.service"
import { ApiTokenService } from "../api/services/token.service"

export function SearchForm(props) {
    let formikRef = React.useRef()
    const propertyService = new ApiPropertyService()
    const tokenService = new ApiTokenService()
    let id = sessionStorage.getItem('id')

    return (
        <div className="flex items-center justify-center mt-14">
            <Formik
                innerRef={formikRef}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                                term: ''
                            }}
                validationSchema={
                    Yup.object({
                    term: Yup.string()
                        .required('Enter a name, city, or state to search.')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setSubmitting(true)
                        let resp
                        if (props.searchService === "propertyService"){
                            resp = await propertyService.getAssetBySearchTerm(values.term)
                        }
                        else if (props.searchService === "tokenService"){
                            resp = await tokenService.searchTokens(values.term, id)
                        }
                        props.resultsSetter(resp.data)
                    } catch (error) {
                        props.setNotify({msg: 'There was an error searching.',
                                        color: 'red',
                                        show: true})
                        console.error(error)
                    }
                    setSubmitting(false)
                }}
            >{form => (
                <Form>
                    <div className="flex flex-1 items-center justify-center">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <Field
                                    id="term"
                                    name="term"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Search"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </Form>)}
            </Formik>
            <button
                className="ml-3 bg-indigo-600 text-white active:bg-indigo-500 font-bold uppercase text-xs align-top py-2.5 px-3 rounded shadow hover:shadow-lg hover:bg-indigo-800 outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={() => {
                    props.reset(props.reloadAll + 1)
                    formikRef.current.resetForm()
                }}
            >
                Reset
            </button>
        </div>
    )
}
