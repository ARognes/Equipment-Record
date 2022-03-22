
export async function searchForItem(search: string, items: any[]) {

  const value = await waitForValue(search);

  if (value.length < 1) { // Clear search highlighting
    items.forEach(data => {
      const div = document.getElementById(data.id);
      div.hidden = false;
      div.getElementsByClassName('item-name')[0].innerText = data.name;
    });
  }
  else {
    items.forEach(data => { // Highlight name of search results
      const div = document.getElementById(data.id);
      if (!data.name.toUpperCase().includes(value)) div.hidden = true;
      else {
        div.hidden = false;
        let name = div.getElementsByClassName('item-name')[0];
        name.innerHTML = data.name.replace(new RegExp(value, "gi"), match => `<mark>${match}</mark>`);
      }
    });
  }
}