class StaticPagesController < ApplicationController

  before_action :require_login, only: :root

  def root

  end

  def require_login
    redirect_to new_session_url unless current_user
  end
end
