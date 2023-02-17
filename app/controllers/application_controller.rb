class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authenticated_user
  # include SessionsHelper

  private

  def authenticated_user
    @current_user = User.find_by(id: session[:user_id])
    render json: { error: "Not an authorized user" }, status: :unauthorized unless @current_user
  end

end
