# This feature was brought over in 4.3.x, but wasn't officially added
# until 5.0. This spec file is provided as a stub to quell warnings from
# 4.3.x Splunk.

EVAL-<fieldname> = <eval statement>
* Use this to automatically run the <eval statement> and assign the 
  value of the output to <fieldname>.  This feature is referred to as 'calculated fields'.
* When multiple EVAL-* statements are specified, they behave as if 
  they are run in parallel, rather than in any particular sequence.  
  This means that if you have e.g. EVAL-x=y*2, EVAL-y=100, x will be 
  assigned the original value of y * 2, not the value of y after it is set to 100.
* All field calculations will done after field aliasing but before lookups.  This
  means you can lookup based on the value of a calculated field
