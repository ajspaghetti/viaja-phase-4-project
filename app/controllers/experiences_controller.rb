class ExperiencesController < ApplicationController

    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        experiences = Experience.all
        render json: experiences, status: :ok
    end

    def show
        experience_show = Experience.find(params[:id])
        render json: experience_show, status: :ok
    end

    def create
        experience_create = Experience.create!(experience_params)
        render json: experience_create, status: :created
    end

    def update
        experience_update = Experience.find(params[:id]).update!(experience_params)
        render json: experience_update, status: :accepted
    end

    def destroy
        experience_delete = Experience.find(params[:id]).destroy!
        render json: experience_delete
        head :no_content
    end

    private

    def experience_params
        params.permit(:title, :activity, :description, :rating, :destination_id, :user_id)
    end

    def not_found
        render json: { error: "Experience not found"}, status: :not_found
    end

end
