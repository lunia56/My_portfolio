import style from "./ContactForm.module.scss";
import {useForm} from "react-hook-form";
import axios from "axios";


export const ContactForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: 'onChange'})


    const onSubmit = (formData) => {
        console.log('formData',formData)
        axios.post('http://localhost:3002/sendMessage',formData)
            .then((res)=>{
                // alert('Your message has been send!')
            console.log(res.data)
            })
        // reset()
    }

    return <div className={style.formContainer} id='contacts'>
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={style.formItem}>
                <input type="text" placeholder={'Your Name'} {...register('name', {
                    required: "name is required",
                    minLength: {
                        value: 3,
                        message: 'Minimum 3 characters...'
                    }
                })}/>
                <div>{errors.name && <p className={style.errorMessage}>{errors.name.message}</p>}</div>
            </div>

            <div className={style.formItem}>
                <input type="text" placeholder={'Your Email'} {...register('email', {
                    required: "email is required",
                    pattern: {
                        value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                        message: 'Please enter valid email...'
                    }
                })}/>
                <div>{errors.email && <p className={style.errorMessage}>{errors.email.message}</p>}</div>
            </div>

            <div className={style.formItem}>
                <textarea className={style.formItemTextarea} placeholder={"Message"}
                                                  {...register('messages', {
                                                          required: false,
                                                          maxLength: {
                                                              value: 300,
                                                              message: 'Maximum 300 characters...'
                                                          }
                                                      }
                                                  )}/>
                <div>{errors.messages && <p className={style.errorMessage}>{errors.messages.message}</p>}</div>
            </div>

            <button className={style.buttonSubmit} type={'submit'}
                   disabled={!isValid}
            >Send Here</button>
        </form>
    </div>
}