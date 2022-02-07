import os
import shutil

os.remove('.next.zip')
shutil.make_archive('.next', 'zip', '.next')
