# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  # See ActionController::RequestForgeryProtection for details
  before_filter :set_access

  def set_access
	response.headers["Access-Control-Allow-Origin"] = "*"
	response.headers["Access-Control-Allow-Methods"] = "*"

	
  end
  # Scrub sensitive parameters from your log
  # filter_parameter_logging :password
end
