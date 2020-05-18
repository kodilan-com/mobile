.PHONY: install android play start ios fix lint check instal-hooks clean beta beta-android beta-ios bundle fastlane-ios fastlane-android incr-build-tag jetifier

build: install start

# install deps
install:
	npm install	

# start server
start:
	npm start

# run on android
android:
	react-native run-android

# run on ios
ios:
	react-native run-ios --simulator="iPhone 11"

# run on i8 Simulator for Check Constraints
i8:
	react-native run-ios --simulator="iPhone 8"
	
# runs eslint --fix to fix all that is fixable via prettier
fix:
	node_modules/eslint/bin/eslint.js src --fix

# runs the eslint to see if there is any errors
lint:
	node_modules/eslint/bin/eslint.js src

check: lint
