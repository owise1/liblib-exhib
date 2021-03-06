# liblib-exhib

An exhibition app for [liblib](https://github.com/owise1/liblib).

Load digital artworks onto liblib to create an ad-hoc wifi offline exhibition.

## Instalation

To install in your liblib you'll need [couchapp](https://github.com/couchapp/couchapp)

    1. `npm install liblib-exhib`
    2. `couchapp push node_modules/liblib-exhib/app default`

If you'd like requests for any domain to use your exhibition add these lines to `/etc/couchdb/local.ini` [(more info)](http://docs.couchdb.org/en/latest/config/http.html#virtual-hosts)

```
[vhosts]
* = /liblib/_design/liblib-exhib/_rewrite
```

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



