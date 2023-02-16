class UsersController < ApplicationController
  
  skip_before_action :authorized, only: :create

  def index
    users = User.all
    render json: users, status: :ok
  end

  def show
    @current_user = User.find_by(id: session[:user_id])
    render json: @current_user
  end

  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # def update
  #   user = User.find(params[:id])
  #   user.update!(user_params)
  #   render json: user, status: :ok
  # end

  # def destroy
  #   user = user.find(params[:id])
  #   user.destroy
  # end

  private

  def user_params
    params.permit(:username, :password, :email, :image_url, :bio)
  end

end