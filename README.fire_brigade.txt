################################################################################
#                                                                              #
#		      	 Fire Brigade app 1.x                                  #
#	   A Splunk app to provide insight into index state                    #
#                                                                              #
################################################################################

This application is aimed at helping administrators understand the current
state of their index, as it relates to disk footprint, and the retention
settings for the index.

In a standalone environment, this app by itself is sufficient to collect data
about the indexes on the system, and report on it with the views contained
herein. In a distributed environment, the TA-fire_brigade app will also be
required; this TA should be installed on indexer nodes if they are not running
Splunkweb (no Splunk UI). Dedicated search head(s) in a distributed
environment should have the full application installed.

The TA (and a saved search within the full app) collects data using the
dbinspect search command. This detail of the constituent buckets in the index
is used to drive several visualizations about the state of the index.



				Configuration

The list of indexes to be monitored is contained in the lookup table called
monitored_indexes.csv. This list can be maintained by hand, or kept up to date
automatically by means of a saved search. This saved search, titled "Update
monitored list from REST" is *enabled* by default, meaning that the list of
indexes will be automatically updated. Note that in a distributed environment,
the updates to the list must be made to the monitored_indexes lookup within
the TA-fire_brigade app as well.


				Compatibility

Due to a heavy dependency on the "rest" search operator, a minimum
version of Splunk 4.3 is required for this application.


			 Thanks and Acknowledgements

Thanks to all of the sites that tested early versions of the application. My
colleagues were helpful in getting the application to a wider audience, as
well as providing critical feedback in improving the dashboards.

Dritan Bitincka, Yisroel Bongart, Michael Cormier, Fred de Boer, Octavio di
Sciullo, John Dunlea, Charles Fox, Marc Francoeur, Adam Gabel, Thomas Gadbois,
Jim Goddard, Bob Hartley, Tim Hatcher, Robert Knoeppler, Mark Lindsey, James
Lord, Mike Loven, Nick Malecky, Nate McKervey, Erick Mechler, Craig Nelson,
Shane Newman, Chad O'Neal, Drew Osborne, David Paper, Cheryl Phair, Rich
Prescott, Greg Quale, Vladimir Serebryany, Matthew Settipane, Sandy
Voellinger, Brian Wooden

