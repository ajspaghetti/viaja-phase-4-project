class DestinationsController < ApplicationController

    def index
        destinations = Destination.all
        render json: destinations, status: :ok
    end

    def show
        destination = Destination.find(params[:id])
        render json: destination, status: :ok
    end

    def create
        destination = Destination.create!(destination_params)
        render json: destination, status: :created
    end

    private

    def destination_params
        params.permit(:title, :image_url, :city, :region, :country)
    end
end
