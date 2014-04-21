################################################################################
#                                                                              #
#		      	 Fire Brigade app 2.0                                  #
#	   A Splunk app to provide insight into index state                    #
#                                                                              #
################################################################################

This application is aimed at helping administrators understand the current
state of their index, as it relates to disk footprint, and the retention
settings for the index.

Due to changes in the operation of dbinspect introduced in Splunk 6.0, as well
as changes to the application packaging, this app by itself is *no longer*
sufficient to collect data for a standalone system. The TA-fire_brigade
application will also be required, to act as the data collection source.
In a distributed environment, the TA-fire_brigade app will also be required.
In small environments, a single installation of the TA on the search head can
collect data from all of the indexers. In larger installations, however, the
TA should be installed on all indexing nodes, and *not* on the search head.

The TA (and a saved search within the full app) collects data using the
dbinspect search command. This detail of the constituent buckets in the index
is used to drive several visualizations about the state of the index.


				Compatibility

The output from the dbinspect command changed in version 6.0. This app is
specifically tuned for version 6.0 and higher. If you're running Splunk 4.3 or
Splunk 5.x, use TA-fire_brigade version 1.0.


			 Thanks and Acknowledgements

Thanks to all of the sites that tested early versions of the application. My
colleagues were helpful in getting the application to a wider audience, as
well as providing critical feedback in improving the dashboards.

Dritan Bitincka, Yisroel Bongart, Tian Chen, Michael Cormier, Joe Cramasta,
Fred de Boer, Octavio di Sciullo, John Dunlea, Nick Filippi, Charles Fox,
Marc Francoeur, Adam Gabel, Thomas Gadbois, Jim Goddard, Bob Hartley,
Tim Hatcher, Zhiyi Huang, Robert Knoeppler, Mark Lindsey, James Lord,
Mike Loven, Nick Malecky, Nate McKervey, Erick Mechler, Craig Nelson,
Shane Newman, Chad O'Neal, Drew Osborne, David Paper, Cheryl Phair,
Rich Prescott, Greg Quale, Vladimir Serebryany, Matthew Settipane,
Sandy Voellinger, Brian Wooden

