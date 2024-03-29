import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from './ThemeContext.jsx';
import { postEmail } from '../services/emailController.js';
import { TailSpin } from 'react-loader-spinner';
import { useTranslation } from 'next-i18next';

export default function EmailModal() {
    const { currentTheme } = useContext(ThemeContext)
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        from_name: false,
        reply_to: false,
        message: false,
    });

    const { t } = useTranslation('common')
    const [postEmailResponse, setPostEmailResponse] = useState({})
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        try {
            setLoading(true)
            e.preventDefault();
            setPostEmailResponse('')
            const data = {
                "from_name": toSend.from_name,
                "reply_to": toSend.reply_to,
                "message": toSend.message
            }
            const sendEmail = await postEmail(data)

            setPostEmailResponse(sendEmail)
            setToSend({
                from_name: '',
                reply_to: '',
                message: '',
            });
            setTouched({
                from_name: false,
                reply_to: false,
                message: false,
            });
            // location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        if (!postEmailResponse.ok)
            setTouched({ ...touched, [e.target.name]: true })
    };

    useEffect(() => {
        if (postEmailResponse.ok) {
            document.querySelector('.formWrapper').classList.toggle('hidden');
            setLoading(false)
        }
    }, [postEmailResponse])

    return (
        <>
            <input type="checkbox" id="emailModal" className="modal-toggle" />
            <label htmlFor="emailModal" className="modal cursor-pointer">
                <label className={currentTheme === 'dark' ? "modal-box relative bg-base-100" : "modal-box relative bg-stone-200"} htmlFor="">
                    <label htmlFor="emailModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="formWrapper">
                        <h3 className="mb-3">👋  {t("form.intro")}</h3>
                        <form className="flex flex-col gap-y-4" onSubmit={onSubmit} method="post"
                            encType='application/x-www-form-urlencoded'
                        >
                            <input
                                className={
                                    currentTheme === 'dark' && touched.from_name === false ? "modal-box input relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                        currentTheme === 'dark' && touched.from_name === true && toSend.from_name !== '' ? "modal-box input relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                            currentTheme === 'dark' && touched.from_name === true && toSend.from_name === '' ? "input input-error relative w-full bg-stone-700 pl-2 p-1 rounded"
                                                : currentTheme === 'light' && touched.from_name === false ? "modal-box input relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                    currentTheme === 'light' && touched.from_name === true && toSend.from_name !== '' ? "modal-box input relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                        currentTheme === 'light' && touched.from_name === true && toSend.from_name === '' && "input input-bordered input-error relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded"}
                                type='text'
                                name='from_name'
                                placeholder={t('form.name') + '*'}
                                value={toSend.from_name}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <input
                                className={
                                    currentTheme === 'dark' && touched.reply_to === false ? "modal-box input relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                        currentTheme === 'dark' && touched.reply_to === true && toSend.reply_to !== '' ? "modal-box input relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                            currentTheme === 'dark' && touched.reply_to === true && toSend.reply_to === '' ? "input input-error relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                                currentTheme === 'light' && touched.reply_to === false ? "modal-box input relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                    currentTheme === 'light' && touched.reply_to === true && toSend.reply_to !== '' ? "modal-box input relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                        currentTheme === 'light' && touched.reply_to === true && toSend.reply_to === '' && "input input-bordered input-error relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded"}
                                type='email'
                                name='reply_to'
                                placeholder={t('form.email') + '*'}
                                value={toSend.reply_to}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <textarea
                                className={
                                    currentTheme === 'dark' && touched.message === false ? "modal-box textarea relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                        currentTheme === 'dark' && touched.message === true && toSend.message !== '' ? "modal-box textarea relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                            currentTheme === 'dark' && touched.message === true && toSend.message === '' ? "textarea textarea-error relative w-full bg-stone-700 pl-2 p-1 rounded" :
                                                currentTheme === 'light' && touched.message === false ? "modal-box textarea relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                    currentTheme === 'light' && touched.message === true && toSend.message !== '' ? "modal-box textarea relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded" :
                                                        currentTheme === 'light' && touched.message === true && toSend.message === '' && "textarea textarea-error relative w-full bg-stone-300 text-[var(--lm-secondary-color)] pl-2 p-1 rounded"
                                }
                                type='text'
                                name='message'
                                placeholder={t('form.message') + '*'}
                                rows='10'
                                value={toSend.message}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <p>{'* ' + t('general.required')}</p>
                            <button className="emailFormButton btn btn-sm" type='submit'>{loading === true ? <TailSpin
                                height="1.5rem"
                                width="1.5rem"
                                color="currentColor"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperclassName=""
                                visible={true}
                            /> : t('general.submit')}</ button >
                        </form>
                    </div>
                    {postEmailResponse.ok === true ?
                        <div className="flex flex-col items-center p-10 gap-y-10">
                            <p className="text-green-600">email sent successfully!</p>
                            <h3 className="text-3xl text-center"><span className="text-5xl block mb-6">💪 </span>{t('email-success')}</h3>
                        </div> : postEmailResponse.ok === false &&
                        <div className="flex flex-col items-center p-10 gap-y-10">
                            <p className="text-red-600">email not sent</p>
                            <h3 className="text-3xl text-center"><span className="text-5xl block mb-6">🥺 </span>{t('email-error')}</h3>
                        </div>}
                </label>
            </label>
        </>
    )
}