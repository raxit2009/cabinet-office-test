class UsersController < ApplicationController
	 before_action :set_user, only: [:show, :edit]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @user = User.create(user_params)

    if @user.save
      redirect_to @user, notice: 'User was successfully created.'
    else
      render :new
    end
  end
  private

  def set_user
    @user = User.find(params[:id])
  end
  def user_params
    params.require(:user).permit(:email, :phone_number, :mobile_number)
  end

	# def new
	# end
	# def create
	# end
	# private
 #    def user_params
 #      params.expect(user: [ :name, :phone_number, :mobile_number ])
 #    end
end
