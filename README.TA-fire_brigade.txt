################################################################################
#                                                                              #
#	 Technology Add-On for Fire Brigade (TA-fire_brigade)                  #
#		   Inputs for the Fire Brigade app                             #
#                                                                              #
################################################################################

This technology add-on for the Fire Brigade app is a data collection tool
only. It contains a saved search, called "DB inspection", which is scheduled
to run once daily, and a couple of macros to support this search.

The search calls the "dbinspect" search command, once for each index listed
within the "monitored_indexes.csv" lookup table. Only indexes named in this
table will be examined in this way. It is important to keep this list up to
date if comprehensive monitoring of the indexes in your environment is
required.

The dbinspect command provides a listing of all of the buckets within the
named index, and some statistics about each. This data is required by the main
Fire Brigade application to display relevant charts and metrics about the
monitored indexes. At the time of writing, dbinspect is not a "distributed"
search command, meaning that this TA must be installed on all of the indexers
in a distributed Splunk environment.

NOTE: A standalone Splunk system (all-in-one) does not need this TA; the main
Fire Brigade app itself will collect the required data from the standalone
system.

Data collected by this app is sent to the "summary" index, which exists in all
default Splunk installations. No additional indexes need to be created.



				Configuration

There are two modes of operation for this TA. The data collection script will
run the dbinspect search command, looping over all of the indexes listed in
the lookup table "monitored_indexes.csv". Administrators have the option of
manually updating this list to constrain the search to only a subset of
indexes. In order to achieve this manual control, the saved search titled
"Update monitored list from REST" must be disabled. The default behavior is
for this search to periodically use the REST API to retrieve the current list
of non-disabled indexes on the local system, and saves the results to the
monitored_indexes.csv. In this default mode, the TA will track all of the
indexes on the system automatically, without the need to manually update the
lookup table.


				Compatibility

Due to a heavy dependency on the "rest" search operator, a minimum
version of Splunk 4.3 is required for this application.
