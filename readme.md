# liblib-exhib

An exhibition app for [liblib](https://github.com/owise1/liblib).

Load digital artworks onto liblib to create an ad-hoc wifi offline exhibition.

## Development

First, you'll need to install [couchapp](https://github.com/couchapp/couchapp) 

Create a [.couchapprc](http://guide.couchdb.org/draft/managing.html#configuring) file. It could look like this:

```javascript
{
  "env" : {
  	"default" : {
        "db" : "http://localhost:5984/liblib"
  	}
  }
}
```

Fetch your dependencies
```	
npm install
```
```
bower install
```

Develop using...

```
gulp watch
```



