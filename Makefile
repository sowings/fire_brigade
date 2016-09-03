APP_NAME=fire_brigade
APP_ID=fire_brigade
APP_LABEL=Fire Brigade
BUILD_ROOT=../build
TA_PACKAGE_BASE=TA-${APP_NAME}
TA_PACKAGE_ID=TA-${APP_ID}
TA_PACKAGE_NAME=${TA_PACKAGE_BASE}-${APP_VERSION}-${BUILD}.tar.gz
APP_PACKAGE_BASE=splunk_app_${APP_NAME}
APP_PACKAGE_NAME=${APP_PACKAGE_BASE}-${APP_VERSION}-${BUILD}.spl
APP_VERSION=2.1.1

TA_FILES = default/macros.conf default/savedsearches.conf default/app.conf default/transforms.conf default/inputs.conf bin/ftr_update_list.py

REPO_URI=file:///Users/sowings/work/svn-repository/splunk/${APP_ID}

all:	ta_package app_package

build_number:
	$(eval BUILD := $(shell git rev-list --count --first-parent HEAD))

ta_package: build_number
	@rm -rf ${BUILD_ROOT}/${TA_PACKAGE_BASE}
	mkdir -p ${BUILD_ROOT}/${TA_PACKAGE_BASE}/default
	mkdir -p ${BUILD_ROOT}/${TA_PACKAGE_BASE}/bin
	for f in ${TA_FILES} ; do sh strip_by_rule.sh strip $$f ${BUILD_ROOT}/${TA_PACKAGE_BASE}/$$f ; done
	sed -e 's/%buildnum%/${BUILD}/g' -e 's/%label%/${TA_PACKAGE_BASE}/g' -e 's/%package_id%/${TA_PACKAGE_ID}/g' -e 's/%version%/${APP_VERSION}/g' -e 's/is_visible = true/is_visible = false/g' default/app.conf > ${BUILD_ROOT}/${TA_PACKAGE_BASE}/default/app.conf
	cp -p README.${TA_PACKAGE_BASE}.txt ${BUILD_ROOT}/${TA_PACKAGE_BASE}/README.txt
	(cd ${BUILD_ROOT} && tar -zcf ${TA_PACKAGE_NAME} ${TA_PACKAGE_BASE})

app_package: build_number
	@rm -rf ${BUILD_ROOT}/${APP_PACKAGE_BASE}
	mkdir -p ${BUILD_ROOT}/${APP_PACKAGE_BASE}
	cp -pr ../${APP_NAME} ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}
	for f in savedsearches.conf macros.conf transforms.conf ; do sh strip_by_rule.sh above default/$$f ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/default/$$f ; done
	sed -e 's/%buildnum%/${BUILD}/g' -e 's/%label%/${APP_LABEL}/g' -e 's/%package_id%/${APP_ID}/g' -e 's/%version%/${APP_VERSION}/g' default/app.conf > ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/default/app.conf
	@rm -rf ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/README*.txt
	rm -rf ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/default/data/ui/views/summary_overview.xml
	cp -p README.${APP_NAME}.txt ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/README.txt
	(cd ${BUILD_ROOT}/${APP_PACKAGE_BASE} && gnutar -zcf ../${APP_PACKAGE_NAME} --exclude .git --exclude dbinspect-decoder-ring.txt --exclude searches.txt --exclude *.xsl --exclude *.sh --exclude screenshots --exclude modules --exclude ~ --exclude Makefile --exclude bin --exclude Makefile --exclude monitored_indexes.csv --exclude bin --exclude inputs.conf --exclude *.diff --exclude sparklines.xml --exclude msft_* --exclude hollfelder.xml --exclude dbinspect_samples ${APP_NAME})

change_list:
	$(eval TAG_HASH := $(shell git rev-list v2.1.0 | head -1))
	$(eval HEAD_HASH := $(shell git rev-list HEAD | head -1))

	git log -p --name-only --pretty=format:"%s" --no-color ${TAG_HASH}..${HEAD_HASH}
