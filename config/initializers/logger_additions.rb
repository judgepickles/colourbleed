logger = ActiveRecord::Base.logger
# if we're gna include this in a model, the local var are out of scope
# solution, need to use local bindings

def logger.debug_variables(bind)
  # puts "it works!"
  vars = eval("local_variables + instance_variables", bind)
  vars.each do |var|
    debug "#{var} = #{eval(var, bind).inspect}"
  end
  
end