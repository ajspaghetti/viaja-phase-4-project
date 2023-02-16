class ActivitiesController < ApplicationController
    
    def index
        activities = Activities.all
        render json: activities, status: :ok
    end

    def show 
        activity = Activity.find(params[:id])
        render json: activity, status: :ok
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    private

    def activity_params
        params.permit(:title, :image_url)
    end
end
