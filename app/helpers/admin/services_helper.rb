module Admin::ServicesHelper
		def published_options(service)
				published_selected, pending_selected = "selected='selected'", "" if service.is_published
				published_selected, pending_selected = "", "selected='selected'" if !service.is_published
				"<option #{published_selected} value='#{service.id}'>Published</option><option #{pending_selected} value='#{service.id}'>Pending</option>".html_safe
		end
end
