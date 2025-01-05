
import (
	"fmt"
	"strings"
	"sync"
)

/*
 This is HtmlParser's API interface.
 You should not implement it, or speculate about its implementation
    type HtmlParser struct {
        maps  map[string]int
        imaps map[int]string
        a     map[int][]int
    }
*/

var scrapedMap map[string]bool
var mapLock sync.RWMutex
var HostName string

func getHostname(url string) string {
	slashSplit := strings.Split(url, "//")
	if strings.Contains(slashSplit[1], ":") {
		colonSplit := strings.Split(slashSplit[1], ":")
		return colonSplit[0]
	} else {
		if strings.Contains(slashSplit[1], "/") {
			singleSlashSplit := strings.Split(slashSplit[1], "/")
			return singleSlashSplit[0]
		} else {
			return slashSplit[1]
		}
	}
}

func crawl(startUrl string, htmlParser *HtmlParser) []string {
	var wg sync.WaitGroup
	scrapedMap = map[string]bool{}

	HostName = getHostname(startUrl)

	wg.Add(1)
	addToMapAndGetToCrawl([]string{startUrl})
	go handleUrl(&wg, startUrl, htmlParser)

	wg.Wait()

	var urlList []string
	for url, _ := range scrapedMap {
		urlList = append(urlList, url)
	}
	return urlList
}

func handleUrl(wg *sync.WaitGroup, url string, htmlParser *HtmlParser) {
	defer wg.Done()
	gotUrls := htmlParser.GetUrls(url)

	var validUrls []string
	for _, gotUrl := range gotUrls {
		if getHostname(gotUrl) == HostName {
			validUrls = append(validUrls, gotUrl)
		}
	}

	crawlUrls := addToMapAndGetToCrawl(validUrls)
	for _, crawlUrl := range crawlUrls {
		wg.Add(1)
		go handleUrl(wg, crawlUrl, htmlParser)
	}
}

func addToMapAndGetToCrawl(urls []string) []string {
	var toCrawl []string
	func() {
		mapLock.Lock()
		defer mapLock.Unlock()
		for _, url := range urls {
			urlCopy := url
			if _, ok := scrapedMap[urlCopy]; !ok {
				scrapedMap[urlCopy] = true
				toCrawl = append(toCrawl, urlCopy)
			}
		}
	}()
	return toCrawl
}
