class DestinationsController < ApplicationController
    
    skip_before_action :authenticated_user, only: [:index, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        destinations = Destination.all
        render json: destinations, status: :ok
    end

    def show
        destination_show = Destination.find(params[:id])
        render json: destination_show, status: :ok, serializer: DestinationExperiencesSerializer
    end

    def create
        destination_create = Destination.create!(destination_params)
        render json: destination_create, status: :created
    end

    def update
        destination_update = Destination.find(params[:id]).update!(destination_params)
        render json: destination_update, status: :accepted
    end

    private

    def destination_params
        params_permit(:place_name, :city, :region, :country)
    end

    def not_found
        render json: { error: "Destination not found" }, status: :not_found
    end

end
