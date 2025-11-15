class UsersController < ApplicationController
	def new
	end
	def create
	end
	private
    def user_params
      params.expect(user: [ :name, :phone_number, :mobile_number ])
    end
end
