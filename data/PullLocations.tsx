export function PullLocations(): Promise<any[]> {
  return fetch("https://uvalib-api-occupancy.firebaseio.com/locations-schemaorg/location.json")
    .then(value => {
      return value.json();
    })
    .then(
      json => {
        var list = Object.keys(json).map(function(k) {
          return json[k];
        });

        list.map((item) => {
          item.name = item.name.replace(/&amp;/g, '&');
        });

        return list;
      }
    );
}
