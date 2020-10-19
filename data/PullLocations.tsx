export function PullLocations(): Promise<any[]> {
  return fetch("https://api.devhub.virginia.edu/v1/occupancy/location.json?orderBy=%22isActive%22&startAt=true&endAt=true")
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
