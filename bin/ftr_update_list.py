import sys
import splunk
import splunk.auth
import splunk.search as search
import splunk.saved as saved

sessionKey = sys.stdin.readline()

job = saved.dispatchSavedSearch("Update monitored list from REST", namespace="TA-fire_brigade", triggerActions=1, sessionKey=sessionKey)

search.waitForJob(job)

job = saved.dispatchSavedSearch("Find DB inspection records today", namespace="TA-fire_brigade", sessionKey=sessionKey)

search.waitForJob(job)

if job.eventCount == 0:
    job = saved.dispatchSavedSearch("DB inspection", namespace="TA-fire_brigade", triggerActions=1, sessionKey=sessionKey)
    search.waitForJob(job)
