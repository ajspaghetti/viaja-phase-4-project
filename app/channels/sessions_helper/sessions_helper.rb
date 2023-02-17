# module SessionsHelper

#     # Returns the user corresponding to the remember token cookie.
#     def current_user
#       if (user_id = session[:user_id])
#         @current_user ||= User.find_by(id: user_id)
#       elsif (user_id = cookies.signed[:user_id])
#         user = User.find_by(id: user_id)
#         if user && user.authenticated?(cookies[:remember_token])
#           log_in user
#           @current_user = user
#         end
#       end
#     end
  
#    #logs the user in. I don't know what your log_in method does there in the    question, if it does the same, you are doing it two times.
  
#     def log_in(user)
#       session[:user_id] = user.id
#     end
# end