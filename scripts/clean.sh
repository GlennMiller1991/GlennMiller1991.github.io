for dir in node_modules dist
 do if [ -d $dir ]
  then rm -r -f $dir
   fi
done