APP_NAME=fire_brigade
APP_LABEL=Fire Brigade
BUILD_ROOT=../build
TA_PACKAGE_BASE=TA-${APP_NAME}
TA_PACKAGE_NAME=${TA_PACKAGE_BASE}-${APP_VERSION}-${BUILD}.tar.gz
APP_PACKAGE_BASE=splunk_app_${APP_NAME}
APP_PACKAGE_NAME=${APP_PACKAGE_BASE}-${APP_VERSION}-${BUILD}.spl
APP_VERSION=1.2.1

TA_FILES = default/macros.conf default/savedsearches.conf default/app.conf

REPO_URI=file:///Users/sowings/work/svn-repository/splunk/fire_brigade

all:	ta_package app_package

build_number:
	$(eval BUILD := $(shell svn info ${REPO_URI} | grep 'Last Changed Rev' | cut -d' ' -f 4))

ta_package: build_number
	@rm -rf ${BUILD_ROOT}/${TA_PACKAGE_BASE}
	mkdir -p ${BUILD_ROOT}/${TA_PACKAGE_BASE}/default
	for f in ${TA_FILES} ; do sh strip_by_rule.sh strip $$f ${BUILD_ROOT}/${TA_PACKAGE_BASE}/$$f ; done
	sed -e 's/%buildnum%/${BUILD}/g' -e 's/%label%/${TA_PACKAGE_BASE}/g' -e 's/%package_id%/${TA_PACKAGE_BASE}/g' -e 's/%version%/${APP_VERSION}/g' default/app.conf > ${BUILD_ROOT}/${TA_PACKAGE_BASE}/default/app.conf
	cp -p README.${TA_PACKAGE_BASE}.txt ${BUILD_ROOT}/${TA_PACKAGE_BASE}/README.txt
	(cd ${BUILD_ROOT} && tar -zcf ${TA_PACKAGE_NAME} ${TA_PACKAGE_BASE})

app_package: build_number
	@rm -rf ${BUILD_ROOT}/${APP_PACKAGE_BASE}
	mkdir -p ${BUILD_ROOT}/${APP_PACKAGE_BASE}
	cp -pr ../${APP_NAME} ${BUILD_ROOT}/${APP_PACKAGE_BASE}
	for f in savedsearches.conf macros.conf ; do sh strip_by_rule.sh remove default/$$f ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/default/$$f ; done
	sed -e 's/%buildnum%/${BUILD}/g' -e 's/%label%/${APP_LABEL}/g' -e 's/%package_id%/${APP_NAME}/g' -e 's/%version%/${APP_VERSION}/g' default/app.conf > ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/default/app.conf
	@rm -rf ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/README*.txt
	cp -p README.${APP_NAME}.txt ${BUILD_ROOT}/${APP_PACKAGE_BASE}/${APP_NAME}/README.txt
	(cd ${BUILD_ROOT}/${APP_PACKAGE_BASE} && tar -zcf ../${APP_PACKAGE_NAME} --exclude .svn --exclude searches.txt --exclude *.sh --exclude screenshots --exclude modules --exclude ~ --exclude Makefile --exclude bin --exclude Makefile ${APP_NAME})
