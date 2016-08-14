################################################################################
#                                                                              #
#		      	 Fire Brigade app 2.1                                  #
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


				 Installation

This app provides the display and visualization functionalty, and, as such, it
should be installed on nodes acting in the search head role. Distributed
environments with multiple search heads accessing the same indexer pool can
install the Fire Brigade app on any of the search heads. The TA (for data
collection) would only need to be installed once per indexer.



				Configuration

This version of the app features "host group" functionality, allowing
administrators to subdivide their indexer pool into smaller groups (e.g. per
data center) to allow for easier management. The navigation menu shows the
views that are broken out into host group versions. The hosts that make up the
groups are defined within a lookup table. This definition goes by the symbolic
name of "fb_host_groups", backed by a filename of "fb_host_groups.csv". The
fields in the lookup are "orig_host" (to match the summary-indexed data from
the TA), and host_group, the label which will appear in the dropdown
menus. This list can be edited with the lookup editor app (link below) or by
a standard search piped to "outputlookup".


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

