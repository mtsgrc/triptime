#/bin/bash
#zipalign -v 4 /home/garcia_matias/SYS/Voyager/Voyager2/MobileApp/gofun/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk /home/garcia_matias/SYS/Voyager/Voyager2/MobileApp/gofun/platforms/android/app/build/outputs/apk/release/app-release-signed.apk
scp -P 49800 /home/garcia_matias/SYS/Voyager/Voyager2/MobileApp/gofun/platforms/android/app/build/outputs/apk/release/app-release-signed.apk manager@10.1.10.52:~/
