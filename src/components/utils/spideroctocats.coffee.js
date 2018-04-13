fs = require( "fs" )	
request = require( "request" )	
async = require( "async" )	

### call this in the octocats list:

list = []
$( "img" ).each ( i, el )->
	#console.log	arguments
	_src =	$( @ ).data( "src" )
	list.push _src if _src
	
JSON.stringify( list, true, 2	)

###
octocats = [
	"http://octodex.github.com/images/Mardigrastocat.png",
	"http://octodex.github.com/images/kimonotocat.png",
	"http://octodex.github.com/images/Professortocat_v2.png",
	"http://octodex.github.com/images/goretocat.png",
	"http://octodex.github.com/images/FIRSTocat.png",
	"http://octodex.github.com/images/motherhubbertocat.png",
	"http://octodex.github.com/images/skitchtocat.png",
	"http://octodex.github.com/images/gangnamtocat.png",
	"http://octodex.github.com/images/droctocat.png",
	"http://octodex.github.com/images/spidertocat.png",
	"http://octodex.github.com/images/megacat-2.png",
	"http://octodex.github.com/images/dodgetocat_v2.png",
	"http://octodex.github.com/images/stormtroopocat.jpg",
	"http://octodex.github.com/images/pusheencat.png",
	"http://octodex.github.com/images/deckfailcat.png",
	"http://octodex.github.com/images/murakamicat.png",
	"http://octodex.github.com/images/homercat.png",
	"http://octodex.github.com/images/minion.png",
	"http://octodex.github.com/images/droidtocat.png",
	"http://octodex.github.com/images/octofez.png",
	"http://octodex.github.com/images/heisencat.png",
	"http://octodex.github.com/images/red-polo.png",
	"http://octodex.github.com/images/twenty-percent-cooler-octocat.png",
	"http://octodex.github.com/images/momtocat.png",
	"http://octodex.github.com/images/front-end-conftocat.png",
	"http://octodex.github.com/images/snowoctocat.jpg",
	"http://octodex.github.com/images/electrocat.png",
	"http://octodex.github.com/images/aidorucat.png",
	"http://octodex.github.com/images/codercat.jpg",
	"http://octodex.github.com/images/strongbadtocat.png",
	"http://octodex.github.com/images/adventure-cat.jpg",
	"http://octodex.github.com/images/doctocat-brown.jpg",
	"http://octodex.github.com/images/dojocat.jpg",
	"http://octodex.github.com/images/defunktocat.png",
	"http://octodex.github.com/images/herme-t-crabb.png",
	"http://octodex.github.com/images/saint-nicktocat.jpg",
	"http://octodex.github.com/images/orderedlistocat.jpg",
	"http://octodex.github.com/images/thanktocat.jpg",
	"http://octodex.github.com/images/megacat.jpg",
	"http://octodex.github.com/images/linktocat.jpg",
	"http://octodex.github.com/images/plumber.jpg",
	"http://octodex.github.com/images/octotron.jpg",
	"http://octodex.github.com/images/baracktocat.jpg",
	"http://octodex.github.com/images/octocat-de-los-muertos.jpg",
	"http://octodex.github.com/images/grim-repo.jpg",
	"http://octodex.github.com/images/father_timeout.jpg",
	"http://octodex.github.com/images/waldocat.jpg",
	"http://octodex.github.com/images/hipster-partycat.jpg",
	"http://octodex.github.com/images/riddlocat.jpg",
	"http://octodex.github.com/images/visionary.jpg",
	"http://octodex.github.com/images/oktobercat.jpg",
	"http://octodex.github.com/images/shoptocat.jpg",
	"http://octodex.github.com/images/nyantocat.gif",
	"http://octodex.github.com/images/octdrey-catburn.jpg",
	"http://octodex.github.com/images/spectrocat.png",
	"http://octodex.github.com/images/bear-cavalry.jpg",
	"http://octodex.github.com/images/andycat.jpg",
	"http://octodex.github.com/images/notocat.jpg",
	"http://octodex.github.com/images/dodgetocat.jpg",
	"http://octodex.github.com/images/cloud.jpg",
	"http://octodex.github.com/images/scarletteocat.jpg",
	"http://octodex.github.com/images/poptocat.jpg",
	"http://octodex.github.com/images/jenktocat.jpg",
	"http://octodex.github.com/images/xtocat.jpg",
	"http://octodex.github.com/images/chellocat.jpg",
	"http://octodex.github.com/images/cherryontop-o-cat.jpg",
	"http://octodex.github.com/images/supportcat.jpg",
	"http://octodex.github.com/images/collabocats.jpg",
	"http://octodex.github.com/images/constructocat2.jpg",
	"http://octodex.github.com/images/total-eclipse-of-the-octocat.jpg",
	"http://octodex.github.com/images/pacman-ghosts.jpg",
	"http://octodex.github.com/images/okal-eltocat.jpg",
	"http://octodex.github.com/images/octoclark-kentocat.jpg",
	"http://octodex.github.com/images/agendacat.jpg",
	"http://octodex.github.com/images/ironcat.jpg",
	"http://octodex.github.com/images/inspectocat.jpg",
	"http://octodex.github.com/images/jean-luc-picat.jpg",
	"http://octodex.github.com/images/spocktocat.jpg",
	"http://octodex.github.com/images/wilson.jpg",
	"http://octodex.github.com/images/swagtocat.jpg",
	"http://octodex.github.com/images/drunktocat.jpg",
	"http://octodex.github.com/images/dolla-dolla-bill-yall.jpg",
	"http://octodex.github.com/images/hubot.jpg",
	"http://octodex.github.com/images/monroe.jpg",
	"http://octodex.github.com/images/trekkie.jpg",
	"http://octodex.github.com/images/octonaut.jpg",
	"http://octodex.github.com/images/bouncer.jpg",
	"http://octodex.github.com/images/founding-father.jpg",
	"http://octodex.github.com/images/pythocat.png",
	"http://octodex.github.com/images/drupalcat.jpg",
	"http://octodex.github.com/images/socialite.jpg",
	"http://octodex.github.com/images/setuptocat.jpg",
	"http://octodex.github.com/images/repo.jpg",
	"http://octodex.github.com/images/forktocat.jpg",
	"http://octodex.github.com/images/benevocats.jpg",
	"http://octodex.github.com/images/scottocat.jpg",
	"http://octodex.github.com/images/puppeteer.jpg",
	"http://octodex.github.com/images/octobiwan.jpg",
	"http://octodex.github.com/images/class-act.jpg",
	"http://octodex.github.com/images/original.jpg"
]

download = ( url )->
	return ( cb )->	
		name = url.replace( "http://octodex.github.com/images/", "" )
		request( url, cb ).pipe(fs.createWriteStream("./#{ name }"))
		return

fns = []
for url in octocats
	fns.push download( url )

async.parallel fns, ( err, success )->
	console.log "DONE", err, success
	return
