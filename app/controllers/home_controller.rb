class HomeController < ApplicationController
	respond_to :json

	def dogeify
		dogeifier = Dogeify.new
		site = Nokogiri::HTML(open('app/views/home/index.html.erb'))
		site.search('//text()').each do |text|
			text.content = dogeifier.process(text.content)
		end
		respond_with html: site.to_html
	end

end
