const inject_toc = () => {
  const toc_container = $('#toc');

  if(toc_container.length === 0) {
    return;
  }

  let contents = $('#contents');
  const headings = contents.find('h1, h2, h3');
  const ul = $('<ol type="1"></ol>').addClass('post-toc');

  headings.each(function() {
    const heading = $(this);
    const id = heading.attr('id');

    if(!id)
      return;

    const item = $('<li></li>');
    const link = $('<a></a>').text(heading.text()).attr('href', '#' + id);

    item.append(link);
    ul.append(item);
  });

  toc_container.append(ul);
}

const theme = localStorage.getItem('theme');

$(document).ready(function() {
  if (theme) $('body').attr('class', theme);
  inject_toc();
});

$('#toggle-theme').on('click', function() {
  $('body').toggleClass('light dark');
  localStorage.setItem('theme', $('body').attr('class'));
});
