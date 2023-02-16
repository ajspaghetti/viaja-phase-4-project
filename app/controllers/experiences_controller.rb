class ExperiencesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        experiences = user.experiences.uniq
        render json: experiences, status: :ok
    end

    def show
        experience = Experience.find(params[:id])
        render json: experience, status: :ok
    end

    def create
        experience = Experience.create!(experience_params)
        render json: experience, status: :created
    end

    def update
        experience = Experience.find(params[:id])
        experience.update!(experience_params)
        render json: experience, status: :ok
    end

    def destroy
        experience = Experience.find(params[:id])
        experience.destroy
    end

    private

    def experience_params
        params.permit(:title, :description, :image_url, :activity_id, :destination_id, :user_id, :user)
    end

end
