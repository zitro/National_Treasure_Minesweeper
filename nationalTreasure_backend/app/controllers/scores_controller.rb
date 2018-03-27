class ScoresController < ApplicationController

	def index
    @scores = Score.all
    render json: @scores
  end

  def show
    @score = User.find(params[:id])
    render json: @score
  end

  def create
    @score = User.create(score_params)
    render json: @score
  end

  def destroy
    @score = User.find(params[:id])
    @score.destroy
    render json: {}
  end

  private
  def score_params
    params.require(:score).permit(:user_id :points)
  end

end
