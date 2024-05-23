/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */

import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDone } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  EMAIL_RULE,
  PASSWORD_RULE,
  FIELD_REQUIRED_MESSAGE,
  PASSWORD_RULE_MESSAGE,
  EMAIL_RULE_MESSAGE
} from '../../../utils/validators'
import FieldErrorAlert from '../../../components/Form/FieldErrorAlert'
import { registerUserAPI } from '../../../common'

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const navigate = useNavigate()

  const submitRegister = (data) => {
    console.log('submit register: ', data)
    const { email, password, phoneNumber, deliveryAddress } = data
    toast.promise(
      registerUserAPI({ email, password, phoneNumber, deliveryAddress }),
      { pending: 'Registration is in progress...' }
    ).then(() => {
      navigate('/dashboard/login')
    })
  }
  return (

    <>
      <div className="col-sm-7">
        <div className="header-login-frm">
          <h2 className="page-title">Đăng ký thành viên</h2>
        </div>

        <div className="dangkytaikhoan">
          <form onSubmit={handleSubmit(submitRegister)} className="form-horizontal" >
            <div className="full">

              {/* email */}
              <div className="form-group">
                <input type="text" className="form-control" name="email" placeholder="Email" required fdprocessedid="omw47m"
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

              {/* dpassword */}
              <div className="form-group">
                <input type="password" className="form-control" name="password" placeholder="Mật khẩu" required fdprocessedid="e13kk7"
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


              {/* password_confirmation */}
              <div className="form-group">
                <input type="password" className="form-control" name="passconf" placeholder="Nhập lại mật khẩu" required fdprocessedid="m6w2j"
                  error={!!errors['password_confirmation']}
                  {...register('password_confirmation', {
                    validate: (value) => {
                      if (value === watch('password')) return true
                      return 'Password Confirmation does not match!'
                    }
                  })}
                />
                <FieldErrorAlert errors={errors} fieldName={'password_confirmation'} />
              </div>

              {/* deliveryAddress */}
              <div className="form-group">
                <input type="text" className="form-control" name="phone" placeholder="Số điện thoại" required="" fdprocessedid="s2w6is"
                  error={!!errors['phoneNumber']}
                  {...register('phoneNumber', {
                    required: FIELD_REQUIRED_MESSAGE
                  })}
                />
                <FieldErrorAlert errors={errors} fieldName={'phoneNumber'} />
              </div>

              {/* deliveryAddress */}
              <div className="form-group">
                <select name="store" className="form-control" required="" fdprocessedid="zddyf"
                  error={!!errors['deliveryAddress']}
                  {...register('deliveryAddress', {
                    required: FIELD_REQUIRED_MESSAGE
                  })}
                >
                  <option value="">Địa đểm nhận hàng</option>
                  <option value="0">Hà Nội</option>
                  <option value="2">Đà Nẵng</option>
                  <option value="1">Sài Gòn</option>
                  <option value="3">Quảng Nam</option>
                </select>
                <FieldErrorAlert errors={errors} fieldName={'deliveryAddress'} />
              </div>


              <div className="form-group pull-left">
                <input type="submit" className="btn btn-danger" name="save" value="Đăng ký" fdprocessedid="2whfz" />
              </div>
              <div className="form-group pull-right">
                <div className="tml-action-links">
                  <Link to='/dashboard/login'>Đăng nhập</Link>
                  <span style= {{ marginLeft: '5px' }}>nếu bạn đã có tài khoản</span>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="networks clearfix" style= {{ display: 'none' }}>
              <div className="pull-left">
                <a href=""><img src="https://my.orderhangquangchau.com/static/images/register-facebook.png" /></a>
              </div>
              <div className="pull-right">
                <a href=""><img src="https://my.orderhangquangchau.com/static/images/register-google.png" /></a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="introduce">
          <h4 className="uppercase">Tại sao bạn lựa chọn chúng tôi:</h4>
          <p className="text-success">
            <span><MdOutlineDone /></span> Giao dịch an toàn bảo mật tuyệt đối.
          </p>
          <p className="text-success">
            <span><MdOutlineDone /></span> Vận chuyển nhanh toàn quốc, giá tốt nhất.
          </p>
          <p className="text-success">
            <span><MdOutlineDone /></span> Phong cách phục vụ chuyên nghiệp, tư vấn nhiệt tình, chu đáo.
          </p>
          <p className="text-success">
            <span><MdOutlineDone /></span> Không vì lợi ích bán hàng mà bỏ qua lợi ích khách hàng.
          </p>
          <p className="text-success">
            <span><MdOutlineDone /></span> Giải quyết mọi khúc mắc, khiếu nại nhanh chóng.
          </p>
        </div>
      </div>
    </>


  )
}

export default RegisterForm