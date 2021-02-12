export function PullLocations(): Promise<any[]> {
  return fetch("https://api.devhub.virginia.edu/v1/occupancy/location.json")
    .then(value => {
      return value.json();
    })
    .then(
      json => {
        var list = Object.keys(json).map(function(k) {
          return json[k];
        });

        list.map((item) => {
          if(item.name){
            item.name = item.name.replace(/&amp;/g, '&');
          }
        });

        return list;
      }
    );
}
