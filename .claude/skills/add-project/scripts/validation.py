# scripts para skill add-project

# Sugestão: script para validar URLs

def is_valid_url(url: str) -> bool:
    import re
    regex = re.compile(
        r'^(https?://)?'  # http:// ou https://
        r'([\da-z.-]+)\.([a-z.]{2,6})'  # domínio
        r'([/\w .-]*)*/?$'  # path
    )
    return bool(regex.match(url))


# Sugestão: script para checar duplicidade de título

def is_duplicate_title(title: str, archive: list) -> bool:
    return any(p['title'].lower() == title.lower() for p in archive)
