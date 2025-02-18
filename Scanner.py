import requests
import argparse
import threading
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Common payloads
SQLI_PAYLOADS = ["'", "' OR '1'='1", "' OR 'a'='a"]
XSS_PAYLOADS = ["<script>alert('XSS')</script>", '" onmouseover="alert(\'XSS\')']
COMMON_DIRECTORIES = ["/admin", "/login", "/backup", "/test"]

def scan_sqli(url):
    """Scans for SQL Injection vulnerability."""
    print(f"Scanning {url} for SQL Injection...")
    for payload in SQLI_PAYLOADS:
        test_url = f"{url}{payload}"
        response = requests.get(test_url)
        if "sql" in response.text.lower() or "mysql" in response.text.lower():
            print(f"[!] SQL Injection vulnerability found: {test_url}")
            return
    print("[✓] No SQL Injection detected.")
    
def scan_xss(url):
    """Scans for XSS vulnerability."""
    print(f"Scanning {url} for XSS...")
    for payload in XSS_PAYLOADS:
        response = requests.get(url, params={"q": payload})
        if payload in response.text:
            print(f"[!] XSS vulnerability found: {url} with payload {payload}")
            return
    print("[✓] No XSS detected.")

def scan_directories(url):
    """Scans for open directories."""
    print(f"Scanning {url} for open directories...")
    for directory in COMMON_DIRECTORIES:
        test_url = urljoin(url, directory)
        response = requests.get(test_url)
        if response.status_code == 200:
            print(f"[!] Open directory found: {test_url}")
    print("[✓] No open directories detected.")

def main():
    parser = argparse.ArgumentParser(description="Basic Web Vulnerability Scanner")
    parser.add_argument("url", help="URL to scan")
    args = parser.parse_args()
    
    url = args.url if args.url.startswith("http") else "http://" + args.url

    # Run scans in parallel
    threads = [
        threading.Thread(target=scan_sqli, args=(url,)),
        threading.Thread(target=scan_xss, args=(url,)),
        threading.Thread(target=scan_directories, args=(url,))
    ]
    
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join()

    print("\n[✓] Scanning complete!")

if __name__ == "__main__":
    main()
    
