/* eslint-disable react/no-unknown-property */
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  EMAIL_RULE,
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE
} from '../../../utils/validators'
import FieldErrorAlert from '../../../components/Form/FieldErrorAlert'
// import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
// import { login, loginUserAPI, selectCurrentUser } from '../../../redux/user/userSlice'
import { login, selectCurrentUser } from '../../../redux/user/userSlice'
import { useEffect } from 'react'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectCurrentUser)

  useEffect(() => {
    if (user) {
      navigate('/dashboard/member/profile')
    }
  }, [user, navigate])

  // const submitLogIn = (data) => {
  //   const { email, password } = data

  //   toast.promise(
  //     dispatch(loginUserAPI({ email, password })),
  //     { pending: 'Logging in...' }
  //   ).then(res => {
  //     if (!res.error) navigate('/dashboard/member/profile')
  //   })
  // }

  const submitLogIn = (data) => {
    const { email, password } = data
    dispatch(login({ email, password }))
    const user = { email }
    localStorage.setItem('user', JSON.stringify(user))
    navigate('/dashboard/member/profile')
  }


  return (
    <div id="content" className="container">
      <main className="main" role="main">
        <div className="row main-row">
          <div className="col-md-12">
            <div className="dangkytaikhoan dangnhap">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item_1">
                    <h3 className="title">
                                    Đăng ký thành viên mới
                    </h3>
                    <p className="desc">
                                    Đăng ký thành viên mới chỉ trong vòng 1 phút để có thể đặt hàng.
                    </p>
                    <div className="button">
                      <Link className="btn btn-success" to='/dashboard/register'>Đăng ký tài khoản</Link>
                      {' '}
                      <Link className="btn btn-danger" to="/dashboard/reset-password">Khôi phục tài khoản</Link>
                    </div>

                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item_2">
                    <h3 className="title">
                          Bạn đã có tài khoản
                    </h3>
                    <p style= {{ color: 'red' }}>
                      Notice: Nếu không thể đăng nhập hệ thống, Nhấn khôi phục tài khoản để lấy lại thông tin<br/>hoặc Liện hệ với chúng tôi để nhận mật khẩu mới
                    </p>


                    <form className="form_dangnhap" onSubmit={handleSubmit(submitLogIn)}>
                      <div className="form-group"><label htmlFor="username">Tài khoản Hoặc Email</label>
                        <input type="text" name="username" className="form-control" fdprocessedid="9awy6r"
                          required
                          error={!!errors['email']}
                          {...register('email', {
                            required: FIELD_REQUIRED_MESSAGE,
                            pattern: {
                              value: EMAIL_RULE,
                              message: EMAIL_RULE_MESSAGE
                            }
                          })}
                        />
                        <FieldErrorAlert errors={errors} fieldName={'email'} />
                      </div>

                      <div className="form-group"><label htmlFor="password">Mật khẩu</label>
                        <input type="password" name="password" className="form-control" fdprocessedid="lxsmtq"
                          required
                          error={!!errors['password']}
                          {...register('password', {
                            required: FIELD_REQUIRED_MESSAGE,
                            pattern: {
                              value: PASSWORD_RULE,
                              message: PASSWORD_RULE_MESSAGE
                            }
                          })}
                        />
                        <FieldErrorAlert errors={errors} fieldName={'password'} />
                      </div>
                      <input type="submit" className="btn btn-danger" name="login" value="Đăng nhập" fdprocessedid="dx2u06" />
                    </form>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
}

export default LoginForm