class Api::V1::GreetingsController < ApplicationController
  before_action :set_greeting, only: [:show, :update, :destroy]
  def index
    @greetings = Greeting.all
    render json: @greetings
  end

  private

  def set_greeting
    @greeting = Greeting.find(params[:id])
  end

  def greeting_params
    params.require(:greeting).permit(:message)
  end
end
